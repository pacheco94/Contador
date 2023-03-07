module.exports = async function main(callback){
    try{
         //Instanciando el contrato
         const Contador = artifacts.require("contador.sol");
         const contador = await Contador.deployed();

         //we charge the game time to 10
          await contador.setDurationGamen(10);

         //we get game time 
         let gametime = await contador.getDuration();
         console.log("Time game",gametime.toString());

         //set the time to its original value
         let restoredtime = await contador.resetTime();
         console.log("Time restored",restoredtime.toString());

         //getting remaning game time
         let resttime = await contador.remaningTime();
         console.log("Remaning time", resttime.toString());


        callback(0);
    }catch(error){
        console.error(error);
        callback(1);
    }
}