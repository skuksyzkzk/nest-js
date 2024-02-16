import { Injectable, Delete } from '@nestjs/common';

@Injectable()
export class BoardService {
    private boards = [
        {
            id: 1,
            name: 'kim',
            content: 'content 1',
        },
        {
            id: 2,
            name: 'kim2',
            content: 'content 2',
        },
        {
            id: 3,
            name: 'kim3',
            content: 'content 3',
        },
        {
            id: 4,
            name: 'kim4',
            content: 'content 4',
        },
        {
            id: 5,
            name: 'kim5',
            content: 'content5',
        },
        {
            id: 6,
            name: 'kim6',
            content: 'content 6',
        },
    ]
    findAll(){
        return this.boards;
    }

    find(id: number) {
        const index = this.boards.findIndex(board => board.id === id);
        return this.boards[index];
    }

    create(data) {
        const newBoard = { id:this.getNextId(),...data};
        this.boards.push(newBoard);
        return newBoard;
    }
    update(id:number,data) {
        const index = this.getBoardId(id);
        if(index > -1) {
            this.boards[index] = {
                ...this.boards[index],
                ...data,
            };
            return this.boards[index];
        }
        return null;
    }

    delete(id: number){
        const index = this.getBoardId(id);
        if(index > -1) {
            const deleteBoard = this.boards[index];
            this.boards.splice(index,1);
            return deleteBoard;
        }
        return null;
    }
    getBoardId(id : number) {
        return this.boards.findIndex(board => board.id === id);
    }
    getNextId() {
        return this.boards.sort((a,b) => (b.id -a.id))[0].id +1 ;
    }
}
