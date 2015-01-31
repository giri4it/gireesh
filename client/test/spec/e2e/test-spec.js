describe('angularjs homepage', function() {
  it('should be have a title ksgbabu.com', function() {
    browser.get('http://localhost:9000/');
    expect(browser.getTitle()).toEqual('ksgbabu.com');
  });
});