/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';
import Task from '../models/Task';

export default {
  async create(request: Request, response: Response) {
    const { description, state } = request.body;

    const tasksRepository = getRepository(Task);

    const data = {
      description,
      state,
    };

    const schema = Yup.object().shape({
      description: Yup.string().required(),
      state: Yup.number().required(),
    });

    await schema.validate(data);

    const task = tasksRepository.create(data);

    await tasksRepository.save(task);

    return response.status(201).json(task);
  },

  async index(request: Request, response: Response) {
    const tasksRepository = getRepository(Task);

    const tasks = await tasksRepository.find();

    return response.json(tasks);
  },

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const tasksRepository = getRepository(Task);

    await tasksRepository.delete(id);

    return response.status(204).json();
  },

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { state } = request.body;

    const tasksRepository = getRepository(Task);

    await tasksRepository.update(id, {
      state,
    });

    return response.status(200).json();
  },
};
