function konversiMenit(menit) {
    // you can only write your code here!
    if(menit <60){
        return  "0:" + menit;
    }
    else{
        var jam = menit / 60;;
        var jam = jam.toFixed(0);
        var m = menit % 60;
        if (m < 10)
            m = "0" + m;
        return jam + ":" + m;
    }
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00