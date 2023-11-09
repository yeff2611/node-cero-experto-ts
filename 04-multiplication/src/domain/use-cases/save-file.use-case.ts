import fs from 'fs'


interface SaveFileUseCase {
    execute: (options: Options) => boolean;
}
interface Options {
    fileContent: string;
    fileName: string;
    fileDestination: string;

}

export class SaveFile implements SaveFileUseCase {
    constructor(
        /**
         * Reporsitory: StorageRepository
         */
    ) { }
    execute({
        fileContent,
        fileName,
        fileDestination,

    }: Options): boolean {
        try {
            fs.mkdirSync(fileDestination, { recursive: true })
            fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent)
            // console.log('File Created!!');
            return true
        } catch (error) {
            console.error(error);
            return false
        }

    }
}