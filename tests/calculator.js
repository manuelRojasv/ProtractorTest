let homepage = require('../pages/homepage')

describe ('demo Calculator test', function(){

    it('addition test', function(){
           
          // browser.get('http://juliemr.github.io/protractor-demo/');
          
          homepage.get('http://juliemr.github.io/protractor-demo/');

           //element(by.model('first')).sendKeys('5');
           homepage.enterFirstNumber('9');

           //element(by.model('second')).sendKeys('9');
           homepage.enterSecondNumber('8');
           
           //element(by.id('gobutton')).click();
           homepage.clickGo();

          // element(by.css('[ng-click="doAddition()"]')).click();
          //let result = element(by.cssContainingText('.ng-binding', '14'));
          //expect(result.getText()).toEqual('14');
            homepage.verifyResult('17');

           browser.sleep(7000)
    });

});