import { PrismaClient, SeverityLevel } from "@prisma/client";
import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { log } from "console";

const prisma = new PrismaClient();

const SeverityLevelEnum = {
  low: SeverityLevel.LOW,
  medium: SeverityLevel.MEDIUM,
  high: SeverityLevel.HIGH,
};

export class PostgresDatasource implements LogDatasource {
  async saveLog(newLog: LogEntity): Promise<void> {
    const { level, message, origin, createdAt } = newLog;

    const insertedLog = await prisma.logModel.create({
      data: {
        level: SeverityLevelEnum[level],
        message,
        origin,
        createdAt,
      },
    });


    console.log(`Log saved in postgres: ${insertedLog.id}`);
  }

  async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
    const level = SeverityLevelEnum[severityLevel];
    const logs = await prisma.logModel.findMany({
        where: {
            level,
        },
    })
    return logs.map(LogEntity.fromObject)
  }
}
