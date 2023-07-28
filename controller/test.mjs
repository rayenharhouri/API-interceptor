import { driver, desiredCaps } from '../conf/conf.js';
import dotenv from 'dotenv'
import {Route} from './constant.js'
import { get } from 'http';



dotenv.config()
var x = "Cité Ennozha";
var y = "Charguia 2";
function getRoute() {
return Route
}

describe('My test suite', () => {
  before(async () => {
    console.log("Test session started");
    if (process.pid) {
      console.log('This process is your pid mocha ' + process.pid);
    }
  });

  after(async () => {
    console.log("Test session ended");
  });


  it('should init', async () => {
    setTimeout(async function() {
      driver.init(desiredCaps); 
      done();
    }, 3000);
  });
  
  // it('should insert Tunisia', async () => {
  //   setTimeout(async function() {
  //   await $('//*[@text="Search for a country"]').setValue('Tunisia'); // Set the search value
  //   done();
  // }, 3000);
  // });

  // it('should enter text into a text field', async function() {
  //   setTimeout(async function() {
  //   const textField = await driver.elementByXPath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText');
  //   await textField.sendKeys('Tunisia'); // Enter text into the text field
  //   done()
  // }, 10000);
  // });

  it('should click on a button', async function(done) {
    setTimeout(async function() {
    const button = await driver.elementByXPath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.Button'); // Replace with your own XPath expression
    await button.click(); // Click the button
  }, 10000);
  done()
  });



  it('should click on Where To', async function(done) {
    setTimeout(async function() {
    const button = await driver.elementByXPath('//android.view.View[@content-desc="Where to?"]'); // Replace with your own XPath expression
    await button.click(); // Click the button
  }, 10000);
  done()
  });



  it('should click on origin', async function(done) {
    setTimeout(async function() {
    await new Promise(resolve => setTimeout(resolve, 4000));
    const button = await driver.elementByXPath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.LinearLayout[1]/android.widget.LinearLayout'); // Replace with your own XPath expression
    const button1 = await driver.elementByXPath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.EditText'); // Replace with your own XPath expression
    await button.click();
    await button1.sendKeys(x);
    console.log("sendkeys done to origin")
    await new Promise(resolve => setTimeout(resolve, 2000));
    const button2 = await driver.elementByXPath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[1]')
    await button2.click();
  }, 10000);
  done()
  });


  it('should click on destination', async function(done) {
    setTimeout(async function() {
    await new Promise(resolve => setTimeout(resolve, 7000));
      const button = await driver.elementByXPath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.LinearLayout[2]/android.widget.LinearLayout'); 
      const button1 = await driver.elementByXPath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.EditText');
      await button.click();
      await button1.sendKeys(y);
      console.log("sendkeys done to destination")
      const button2 = await driver.elementByXPath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[1]')
      await new Promise(resolve => setTimeout(resolve, 2000));
      await button2.click();
    }, 19000);
    done()
  });

  it('should get price', async function() {
    setTimeout(async function() {
      await new Promise(resolve => setTimeout(resolve, 18000));
      const element = await driver.elementByXPath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[1]/android.view.ViewGroup//android.widget.TextView[4]');
      console.log("element");
      const text = await element.text();
      //process.emit('mocha-data', text);
      console.log(text);  
      Route = {origin: x, destination: y, price: text}
      getRoute();
      console.log("Done");
    }, 20000);
    });
});





