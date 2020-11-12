describe('Upload', function () {
    it('should upload', function () {
        browser.url('./login/signin');
        $('input[placeholder="Username or email address"]').setValue('email');
        $('input[placeholder="Password"]').setValue('password');

        $('button=Log in').click();

        $('div=demetres').waitForDisplayed();

        browser.url('./upload');

        $('.file-input').waitForExist();
        browser.execute((el) => el.style.visibility = 'visible', $('.file-input'));
        $('.file-input').waitForDisplayed();

        browser.debug();
    });
});