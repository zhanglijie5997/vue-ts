interface type {
    page?: number
}


const num: string = 'zlj';
const token: string = '123';
const peopleMsg: object[] = [];
var page: number = 0;

// seessionStorage 是否存在存在就赋值给page
try {
    
    page = !!sessionStorage.getItem('page') ?  Number(sessionStorage.getItem('page')) : 0;
} catch (error) {
    console.log(error);
}


export default {
    num,
    token,
    peopleMsg,
    page
}