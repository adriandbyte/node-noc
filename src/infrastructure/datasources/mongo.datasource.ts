import { LogModel } from "../../data/mongo";
import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity } from "../../domain/entities/log.entity";



export class MongoDataSource implements LogDatasource {
    async saveLog(log: LogEntity): Promise<void> {
        const newLog = await LogModel.create({
            message: log.message,
            level: log.level,
            origin: log.origin,
        })
        newLog.save();
        console.log("New log created: ", newLog.id)
    }

    async getLogs(severityLevel: any): Promise<LogEntity[]> {
       const logs = await LogModel.find({level: severityLevel}); 
       return logs.map(LogEntity.fromObject);
    }
}