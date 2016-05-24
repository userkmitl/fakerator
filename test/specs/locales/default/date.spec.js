import { expect } from "chai";

import Fakerator from "lib/fakerator";

describe("Default date", () => {

	let fakerator;

	beforeEach( () => {
		fakerator = new Fakerator();
		fakerator.seed(8080);
	});

	it("check date.timezone", () => {
		expect(fakerator.populate("#{date.timezone}")).to.be.equal("Asia/Bangkok");
		expect(fakerator.date.timezone()).to.be.equal("America/Lima");
	});

	it("check date.past", () => {
		//expect(fakerator.populate("#{date.past}")).to.be.an("Date");
		expect(fakerator.date.past()).to.be.an("Date");
		expect(fakerator.date.past(10)).to.be.an("Date");
	});

	it("check date.future", () => {
		//expect(fakerator.populate("#{date.future}")).to.be.an("Date");
		expect(fakerator.date.future()).to.be.an("Date");
		expect(fakerator.date.future(10)).to.be.an("Date");
	});

	it("check date.between", () => {
		//expect(fakerator.populate("#{date.between}")).to.be.an("Date");
		expect(fakerator.date.between()).to.be.an("Date");
		expect(fakerator.date.between(new Date(), new Date())).to.be.an("Date");
	});

	it("check date.recent", () => {
		//expect(fakerator.populate("#{date.recent}")).to.be.an("Date");
		expect(fakerator.date.recent()).to.be.an("Date");
		expect(fakerator.date.recent(10)).to.be.an("Date");
	});

})