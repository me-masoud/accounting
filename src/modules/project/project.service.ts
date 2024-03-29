import { Controller, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService {
  constructor(@InjectRepository(Project) private readonly projectRepository: Repository<Project>) {}

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    const project = new Project();
    project.name = createProjectDto.name;
    await this.projectRepository.save(project);
    return project; // Return the newly created project
  }

  async findAll(): Promise<Project[]> {
    const projects = await this.projectRepository.find();
    return projects;
  }

  async findOne(id: number): Promise<Project | undefined> {
    return await this.projectRepository.findOne(id);
  }

  async update(id: number, updateProjectDto: UpdateProjectDto): Promise<Project> {
    const project = await this.projectRepository.findOne(id);
    if (!project) {
      throw new NotFoundException(`Project with ID ${id} not found`); // Handle not found scenario
    }
    project.name = updateProjectDto.name;
    await this.projectRepository.save(project);
    return project;
  }

  async remove(id: number): Promise<void> {
    await this.projectRepository.delete(id);
  }
}
