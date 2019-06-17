export default class MyCircularQueue{
    constructor(k){
        //用来保存数据长度为K的数据结构
        this.list=Array(k)
        //队首指针
        this.front=0
        //队尾指针
        this.rear=0
        //队列的长度
        this.max=k
    }

    //插入
    enQueue(num){
        if(this.isFull()){
            return false
        }else{
            this.list[this.rear]=num
            this.rear=(this.rear+1)%this.max
            return true
        }
    }

    //移除
    deQueue() {
        let v=this.list[this.front]
        this.list[this.front]=''
        this.front=(this.front+1)%this.max
        return v
    }

    isEmpty() {
        return this.front === this.rear && !this.list[this.front]
    }

    isFull() {
        return this.front === this.rear && !!this.list[this.front]
    }

    Front() {
        if (this.isEmpty()) return -1;
        return this.list[this.front]
    }

    Rear() {
        if (this.isEmpty()) return -1;
        //注意：rear<0  当索引在最后一位时，需要取最后的元素
        let rear=this.rear-1
        return this.list[rear<0 ? this.max-1 : rear]
    }
}