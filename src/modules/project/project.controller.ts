import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { NotFoundException } from '@nestjs/common';
import { Project } from './entities/project.entity'; // Import NotFoundException for error handling

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  async create(@Body() createProjectDto: CreateProjectDto): Promise<Project> {
    try {
      return await this.projectService.create(createProjectDto);
    } catch (error) {
      throw new HttpException(error.message, error.status); // Handle internal server errors
    }
  }

  @Get()
  async findAll(): Promise<Project[]> {
    return await this.projectService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Project> {
    try {
      const project = await this.projectService.findOne(+id);
      if (!project) {
        throw new NotFoundException(`Project with ID ${id} not found`);
      }
      return project;
    } catch (error) {
      throw new HttpException(error.message, error.status); // Handle potential errors
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto): Promise<Project> {
    try {
      const project = await this.projectService.update(+id, updateProjectDto);
      return project; // Return the updated project
    } catch (error) {
      throw new HttpException(error.message, error.status); // Handle potential errors
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.projectService.remove(+id);
  }
}
