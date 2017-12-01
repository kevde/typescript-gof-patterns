import 'mocha';
import { expect } from 'chai';
import RequestBuilder from 'src/creational/Builder';

describe('Builder tests', () => {
  it('create a Request class with properties', () => {
    const requestBuilder = new RequestBuilder();
    const url = 'http://something/users';
    const method = 'GET';
    const request = requestBuilder
      .forUrl(url)
      .useMethod(method)
      .payload(null)
      .build();

    expect(request.method).to.equal(method);
    expect(request.payload).to.be.null;
    expect(request.url).to.equal(url);
  });
});