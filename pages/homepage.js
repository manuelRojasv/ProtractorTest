let homepage = function(){

    let firstNumer_input = element(by.model('first'));

    let secondNumber_input = element(by.model('second'));
    
    let goButton = element(by.id('gobutton'));

    //Change operatos simbols

    let clickOperator_Selector = element(by.model('operator'));

    let select_Substractor = element(by.xpath('/html/body/div/div/form/select/option[5]'));

    let select_Multiplication = element(by.xpath('/html/body/div/div/form/select/option[4]'));
    
    let select_Division = element(by.xpath('/html/body/div/div/form/select/option[2]'));

    let select_Modulo = element(by.xpath('/html/body/div/div/form/select/option[3]'));

    //this section contains the imputs text fields
    this.get = function(url){
         browser.get(url);
    };


    this.enterFirstNumber = function(firstNo){

        firstNumer_input.sendKeys(firstNo);
    };

    this.enterSecondNumber = function(secondNo){

        secondNumber_input.sendKeys(secondNo);
    };
    //this is the Click GO button
    this.clickGo = function(){

        goButton.click();
    };
    //Verify the Result
    this.verifyResult = function(result){

        let output = element(by.cssContainingText('.ng-binding', result));

           expect(output.getText()).toEqual(result);
    };
    //Change the Operators
    this.selectSubstraction = function(){
         clickOperator_Selector.click();
         select_Substractor.click();

    };

    this.selectDiv = function(){
         clickOperator_Selector.click();
         select_Division.click();
    };
    
    this.selectMulti = function(){
        clickOperator_Selector.click();
        select_Multiplication.click();
    };

    this.selectMod = function(){
        clickOperator_Selector.click();
        select_Modulo.click();
    };
};

module.exports = new homepage();