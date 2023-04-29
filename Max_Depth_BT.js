

function FindMaxDepth(root){
    let Depth = 0;
    function MaxDepth(root , level){
        if(!root) return

        if(level > Depth){
            Depth = level
        }

        MaxDepth(root.left , level+1)
        MaxDepth(root.right , level+1)
    }
    MaxDepth(root , 1)

    return Depth;
}