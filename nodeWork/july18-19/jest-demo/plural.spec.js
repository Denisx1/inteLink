function pl(n, world){
    return `${n} ${world}${n>1? 's': ''}`
}

describe('pluralization', ()=>{
    it('has not effect with 1',()=>{
        expect(pl(1,'cat')).toBe('1 cat')
    })
    it('adds \'s\'for 2 and more',()=>{
        expect(pl(2,'cat')).toBe('2 cats')
    })
})