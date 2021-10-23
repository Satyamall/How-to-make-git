class Commit {
    constructor(id, message, author, prev){
        this.id = id
        this.message = message;
        this.timestamp = new Date().toUTCString();
        this.author = author
        this.prev = prev || null
    }
}

class Git{
    constructor(){
        this.head = null;
    }
    addCommit(id,message,author){
        const commit = new Commit(id,message, author, this.head);
        this.head = commit;
    }
    log(){
        let g = this.head;
        console.log(g)
        while(g){
            console.log(g)
            g = g.prev;
        }
    }
}


const repo = new Git();

repo.addCommit(1, "init", "Albert")
repo.addCommit(2, "added: new files", "Albert")
repo.addCommit(3, "added: setup", "Santhi")

repo.log()