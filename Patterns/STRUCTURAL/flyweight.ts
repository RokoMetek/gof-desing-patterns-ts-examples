class Tree {

    private x: number;
    private y: number;
    private type: TreeType;

    constructor(x: number, y: number, type: TreeType) {
        this.x = x;
        this.y = y;
        this.type = type;
    }

    public draw(ctx: CanvasRenderingContext2D) {
        this.type.draw(ctx, this.x, this.y);
    }

}

class TreeType {
    private name: string;
    private color: string;
    private data: string;
    constructor(name: string, color: string, data: string) {
        this.name = name;
        this.color = color;
        this.data = data;
    }
    public draw(ctx: CanvasRenderingContext2D, x: number, y: number) {
        ctx.fillStyle = "#000000"
        ctx.fillRect(x -1, y, 3, 5);
        ctx.fillStyle = this.color;
        ctx.fillRect(x - 5, y - 10, 3, 5);
    }
}

//Only one object map to one tree name
class TreeTypeFactory {
    static treeTypes: Map<string, TreeType> = new Map();
    public static getTreeType(name: string, color: string, data: string): TreeType {
        let res: TreeType = this.treeTypes.get(name);
        if(!res) {
           res = new TreeType(name, color, data);
           this.treeTypes.set(name, res); 
        }
        return res;
    }
}


class Forest {
    private trees: Tree[] = new Array<Tree>();

    public plantTree(name: string, x: number, y: number, color: string, data: string) {
        let type: TreeType = TreeTypeFactory.getTreeType(name, color, data);
        let tree: Tree = new Tree(x, y, type);
        this.trees.push(tree);
    }

    public paintForest(ctx: CanvasRenderingContext2D) {
        this.trees.forEach((tree) => {
            tree.draw(ctx);
        })
    }
}



(function main() {


})()