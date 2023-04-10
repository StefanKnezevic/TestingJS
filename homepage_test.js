Feature('homepage');

Scenario('2_something', ({ I }) => {
    I.amOnPage('https://opensource-demo.orangehrmlive.com/');
    I.wait(2);
    I.fillField("form input[name=username]", "Admin");
    I.fillField("form input[name=password]", "admin123");
    I.click("form button[type=submit]"); 
    I.wait(15);
    I.see("Dashboard");
});

Scenario('3_something', async ( { I }) => {
    I.amOnPage('https://the-internet.herokuapp.com/checkboxes');
    I.wait(5);
    let a = await I.grabTextFrom("#checkboxes");
    console.log("a",a);

});

Scenario('4_something',  ({ I }) => {
    I.amOnPage('https://the-internet.herokuapp.com/dropdown');
    I.selectOption("#dropdown", "2");
    I.wait(5);

});


Scenario('5_something', ({ I }) => {
    I.amOnPage('https://the-internet.herokuapp.com/dynamic_loading/1');
    I.click("//button[contains(text(),'Start')]");
    I.waitForText("Hello World!", 16);
});

