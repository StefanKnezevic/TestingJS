Feature('DemoFeatures');

Scenario(' 1 IamOnPage',  ({ I }) => {
    I.amOnPage('/');
    I.wait(15);
});
