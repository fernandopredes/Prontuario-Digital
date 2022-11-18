import express from 'express';
import listExamUsecase from '../../../domain/usecases/exams/list.exam.usecase';
import readExamUsecase from '../../../domain/usecases/exams/read.exam.usecase';
import deleteExamUsecase from '../../../domain/usecases/exams/delete.exam.usecase';
import createExamUsecase from '../../../domain/usecases/exams/create.exam.usecase';
import updateExamUsecase from '../../../domain/usecases/exams/update.exam.usecase';
import debug from 'debug';
import constantsConfig from '../../../infrastructure/config/constants.config';
import jwt  from 'jsonwebtoken';

const log: debug.IDebugger = debug('app:exam-controller');

class ExamController {
    
    async listExam(req: express.Request, res: express.Response){
        const exam = await listExamUsecase.execute();
        res.status(200).send(exam);
    }

    async getExamById(req: express.Request, res: express.Response) {
        const exam = await readExamUsecase.execute({
            idExams: Number(req.params.idExams)
        });
        res.status(200).send(exam);
    }

    async createExam(req: express.Request, res: express.Response) {
        const token = req.header(`Authorization`)?.replace(`Bearer `, ``);  
        if(!token){
            res.status(401).send({
                error: constantsConfig.EXAMS.MESSAGES.ERROR.REQUIRE_LOGIN
            });
        } else {
            const decoded = jwt.verify(token, String(process.env.SECRET_KEY));
            if(typeof decoded == `string`){
                res.status(401).send({
                    error: constantsConfig.EXAMS.MESSAGES.ERROR.REQUIRE_LOGIN
                });
            } else {
        const exam = await createExamUsecase.execute({
            idUser: decoded.idUser,
            idExams: req.body.idExams,
            exam: req.body.exam,
            date: req.body.date,
            status: req.body.status,
            clinic: req.body.clinic,
            doctor: req.body.doctor,
            comments: req.body.comments
        });
        log(exam);
        res.status(201).send(exam);
    }}  
    }

    async updateExam(req: express.Request, res: express.Response){
        const token = req.header(`Authorization`)?.replace(`Bearer `, ``);  
        if(!token){
            res.status(401).send({
                error: constantsConfig.EXAMS.MESSAGES.ERROR.REQUIRE_LOGIN
            });
        } else {
            const decoded = jwt.verify(token, String(process.env.SECRET_KEY));
            if(typeof decoded == `string`){
                res.status(401).send({
                    error: constantsConfig.EXAMS.MESSAGES.ERROR.REQUIRE_LOGIN
                });
            } else {
        const exam = await readExamUsecase.execute({
            idExams: Number(req.params.idExams)
        });
        
        const examModel = await updateExamUsecase.execute({
            idUser: decoded.idUser,
            idExams: Number(req.params.idExams),
            exam: req.body.exam,
            date: req.body.date,
            status: req.body.status,
            clinic: req.body.clinic,
            doctor: req.body.doctor,
            comments: req.body.comments
        });
        log(examModel);
        res.status(200).send(examModel);
    }}}

    async removeExam(req: express.Request, res: express.Response) {
        const exam = await deleteExamUsecase.execute({
            idExams: Number(req.params.idExams)
        });
        res.status(204).send();
    }
}

export default new ExamController();