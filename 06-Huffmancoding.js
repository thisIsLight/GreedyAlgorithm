//Question
//We are given two arrays - FIrst with the character and second with thier respective frequencies
//We need to write the huffman coding for this array character set


//Solution

class TreeNode{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

const minheapdriver = (arr) => {
    let size = arr.length

    for(let i = Math.floor(size/2)-1;i>=0;i--){
        heapify(arr,size,i)
    }
}

const heapify = (arr, size, index) => {
    let smallest = index
    let left = 2*smallest+1
    let right = 2*smallest+2

    if(left<size && arr[smallest] > arr[left]){
        smallest = left
    }
    if(right < size && arr[smallest] > arr[right]){
        smallest = right
    }
    if(smallest != index){
        let temp = arr[smallest]
        arr[smallest] = arr[index]
        arr[index] = temp
        heapify(arr,size, smallest)
    }
}

const swap = (arr, index1, index2) => {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

const huffcode = (chars, freqs) => {
    let arr = new Array(chars.length)
    for(let i=0;i<arr.length;i++){
        arr[i] = new TreeNode(freqs[i])
    }
    minheapdriver(arr)
    while(arr.length > 1){
        let first = arr[0]
        swap(arr, 0, arr.length-1)
        arr.pop()
        minheapdriver(arr)
        let second = arr[0]
        swap(arr, 0, arr.length-1)
        arr.pop()
        let node = new TreeNode(first.data + second.data)
        if(first.data <= second.data){
            node.left = first
            node.right = second
        }
        else{
            node.left = second
            node.right = first
        }
        arr.push(node)
        minheapdriver(arr)
    }
    let res = []
    extractcode(arr[0], "", res)
    console.log(res)
}


const extractcode = (root, str, arr) => {
    if(!root.left && !root.right){
        arr.push(str)
    }
    else{
        extractcode(root.left, str+'0',arr)
        extractcode(root.right, str+'1',arr)
    }
}

//Inputs

let input1 = ['a','b','c','d','e','f']
let input2 = [5,9,12,13,16,45]

console.log(huffcode(input1,input2))
