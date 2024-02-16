import { Controller, Param } from '@nestjs/common';

@Controller('board')
export class BoardController {
    // board 조회
    @Get()
    findAll(){
        return 'findAll';
    }
    @Get(':id')
    find(
        @Param('id') id: number
    ){
        return `find id: ${id}`;
    }
    //생성
    

}
