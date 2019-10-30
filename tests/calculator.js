let homepage = require('../pages/homepage')

describe ('demo Calculator test - Add, subs, multi', function(){

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
            browser.sleep(2000)
           
    });

    it('Substraction test', function(){
          
          homepage.enterFirstNumber('5');  
          homepage.selectSubstraction();
          homepage.enterSecondNumber('3');
          homepage.clickGo();
          homepage.verifyResult('2');
          browser.sleep(2000)
      

    });

    it('Multiplication test', function(){
        homepage.enterFirstNumber('5');
        homepage.selectMulti();
        homepage.enterSecondNumber('10'); 
        homepage.clickGo();
        homepage.verifyResult('50');
        browser.sleep(2000)

    });
    
});

describe ('demo calculator test - mod, div', function(){
  
  it('division test', function(){
          
    homepage.enterFirstNumber('100');  
    homepage.selectDiv();
    homepage.enterSecondNumber('5');
    homepage.clickGo();
    homepage.verifyResult('20');
    browser.sleep(2000)
  
});  

 it('Modulo test', function(){
          
     homepage.enterFirstNumber('89');  
     homepage.selectMod();
     homepage.enterSecondNumber('9');
     homepage.clickGo();
     homepage.verifyResult('8');
     browser.sleep(2000)

});


});