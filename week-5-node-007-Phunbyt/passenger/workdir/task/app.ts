const taskOne = (passengers:number, shuffle:number)=>{
    //complete your work here
   if (passengers < 1)
     return {
       boarded: [],
       reservation: [],
       count: 0,
     };
   const locations: string[] = [
     "Abuja",
     "Benue",
     "Lagos",
     "Katsina",
     "Sambisa",
   ];
   const passArr = Array.from({ length: passengers }).map((pass, ind) => ({
     name: `${"passenger" + (ind+1)}`,
     location: locations[ind % 5],
   }));

   let passCount = passArr.length;
   const result = {
     boarded: [{}],
     reservation: [{}],
     count: 0,
   };

   if (passCount < 5) {
     result.reservation = passArr;
   }
   if (passCount <= 50 && passCount > 4) {
     if (passCount % 5 == 0) {
       result.boarded = passArr;
       result.count++;
     } else {
       let remaining = passCount % 5;
       result.boarded = passArr.splice(0, passCount - remaining);
       result.reservation = passArr;
       result.count++;
     }
   } else {
     while (passArr.length > 49 && shuffle >= 0) {
       if (shuffle < 1) {
         result.boarded = passArr.splice(0, 50);
         result.reservation = passArr;
         result.count++;
       } else {
         result.boarded = passArr.splice(0, 50);
         result.count++;
         if (passArr.length < 50 && shuffle > 0) {
           if (passArr.length < 5) {
             result.reservation = passArr;
           } else {
             console.log(passArr);
             result.boarded = passArr.splice(
               0,
               passArr.length - (passArr.length % 5)
             );
             result.reservation = passArr;
             result.count = result.count + 1;
           }
         }
       }
       shuffle--;
     }
   }
   return result;
}
export default taskOne;