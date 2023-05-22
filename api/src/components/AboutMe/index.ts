import AboutMeService from './service';
import { HttpError } from '@/config/error';
import { IAboutMeModel } from './model';
import { NextFunction, Request, Response } from 'express';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findAll(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const aboutMeArray: IAboutMeModel = await AboutMeService.findAll();

    res.status(200).json(aboutMeArray);
  } catch (error) {
    next(new HttpError(error.message.status, error.message));
  }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findOne(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const aboutMe: IAboutMeModel = await AboutMeService.findOne(req.params._id);

    res.status(200).json(aboutMe);
  } catch (error) {
    next(new HttpError(error.message.status, error.message));
  }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function create(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const aboutMe: IAboutMeModel = await AboutMeService.insert(req.body);

    res.status(201).json(aboutMe);
  } catch (error) {
    next(new HttpError(error.message.status, error.message));
  }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function remove(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const aboutMe: IAboutMeModel = await AboutMeService.remove(req.params.id);

    res.status(200).json(aboutMe);
  } catch (error) {
    next(new HttpError(error.message.status, error.message));
  }
}
