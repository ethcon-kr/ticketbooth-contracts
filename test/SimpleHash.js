const SimpleHash = artifacts.require("SimpleHash") 

contract('SimpleHash', (accounts) => {
	const [bob, alice] = accounts

	it("register", async () => {
		const ssContract = await SimpleHash.deployed()
		await ssContract.registerEmail("test")

	})

	it("read", async () => {
		const ssContract = await SimpleHash.deployed()
		const list = await ssContract.getList()
		assert(list)

	})

})
