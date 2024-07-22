import { CheckServiceMultiple } from '../domain/use-cases/checks/check-service-multiple';
import { FileSystemDatasource } from '../infrastructure/datasources/file-system.datasource';
import { MongoDataSource } from '../infrastructure/datasources/mongo.datasource';
import { PostgresDatasource } from '../infrastructure/datasources/postgres.datasource';
import { LogRepositoryImpl } from '../infrastructure/repositories/log.repository.impl';
import { CronService } from './cron/cron-service';
import { EmailService } from './email/email.service';


const fsLogRepository = new LogRepositoryImpl(
  new FileSystemDatasource(),
);
const mongoLogRepository = new LogRepositoryImpl(
  new MongoDataSource(),
);
const postgresLogRepository = new LogRepositoryImpl(
  new PostgresDatasource(),
);


const emailService = new EmailService();


export class Server {

  public static async start() {

    console.log( 'Server started...' );

    //todo: Mandar email
    // new SendEmailLogs(
    //   emailService, 
    //   fileSystemLogRepository,
    // ).execute(
    //   ['fernando.herrera85@gmail.com','fernando.herrera.cr@gmail.com']
    // )
    // emailService.sendEmailWithFileSystemLogs(
    //   ['fernando.herrera85@gmail.com','fernando.herrera.cr@gmail.com']
    // );
    
    // const logs = await logRepository.getLogs(LogSeverityLevel.low);
    // console.log(logs);

    // CronService.createJob(
    //   '*/5 * * * * *',
    //   () => {
    //     const url = 'https://google.com';

    //     new CheckServiceMultiple(
    //       [ fsLogRepository, postgresLogRepository, mongoLogRepository ],
    //       () => console.log( `${ url } is ok` ),
    //       ( error ) => console.log( error ),
    //     ).execute( url );
        
    //   }
    // );


  }


}

