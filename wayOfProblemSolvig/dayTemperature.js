//ask questions
//q1.what is temperatuer amplituede?
//ans difference between highest and lowest temperature
//q2. how to find highest and lowest temp?
//q2.what is sensor error

//convert problem into smaller into part
//-ignore sensor error value
//-find max value in temperature array
//-find min value
//-subtrac min from max and return

//seudo code
//array of whole day temperaturee
//const temp=[12,30,20,33,26,'error',42,22,21,20,16]
// for (let i=0;i<temp.length,i++)
//if(tem[i]!=number)continue;
// arr[i]=temp[i];
//short(arr);
//higher amplitude=arr[0];

const temp = [70, 40, 60];
const temp2 = [39, 44, 66, 11, 34];

const tempconvert = function (temp) {
  let mystring = "";
  for (let i = 0; i < temp.length; i++) {
    mystring += `${temp[i]}C in ${i + 1} day... `;
  }
  return mystring;
};
console.log(tempconvert(temp));
console.log(tempconvert(temp2));
