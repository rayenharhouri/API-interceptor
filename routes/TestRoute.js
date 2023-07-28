import express from 'express'
import {exec} from 'child_process'
import {Route} from '../controller/constant.js'
import { createRouteLocal } from '../controller/RouteController.js'

const router = express.Router()

export async function runTest(req, res) {
exec("mocha ./**/test.mjs", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        res.status(500).json({ message: error.message });
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        res.status(500).json({ message: stderr });
    }
    console.log(`stdout: ${stdout}`);
    const index = stdout.toString().length - 5;
    const extractedString = stdout.substring(index);
    console.log("finally " + extractedString)
    if (extractedString.length > 0) {
         createRouteLocal("Cité Ennozha","Charguia 2",extractedString)
    }
    // process.on('mocha-data', (text) => {
    //     console.log("testing")
    //     console.log(text);
    //     res.json({ text });  
    //       });
});

// exec("mocha ./**/test.mjs", { stdio: ['ipc'] }, (error, stdout, stderr) => { 
//     if (!error) {
//         process.on('mocha-data', (text) => {
//             // text will contain the value from your mocha test
//             console.log("testing")
//             console.log(text);
//             console.log(`stdout: ${stdout}`);
            
//             // You can then send the response  
//             res.json({ text });  
//           });
//     }
//   });
}



router.post('/runTest', runTest)


export default router