const D = require('../src/index')
const { months, mons, days, dys } = require('../src/utils')

const today = new Date()
const d = new D(today)
const bDay = new D(1995, 10, 20)

test('D.year', () => {
    expect( d.year ).toBe( today.getFullYear() )
    expect( bDay.year ).toBe(1995)
})

test('D.yr', () => {
    expect( d.yr ).toBe( today.getFullYear() % 100 )
    expect( bDay.yr ).toBe(95)
})

test('D.month', () => {
    expect(bDay.month).toBe(months[10])
})

test('D.mon', () => {
    expect(bDay.mon).toBe(mons[10])
})

test('D.day', () => {
    expect(d.day).toBe(days[today.getDay()])
})

test('D.dy', () => {
    expect(d.dy).toBe(dys[today.getDay()])
})

test('D.date', () => {
    expect(d.date).toBe(today.getDate())
})

test('D.hour', () => {
    expect(d.hour).toBe(today.getHours())
})

test('D.hr', () => {
expect(d.hr).toBe(today.getHours())
})

test('D.minute', () => {
expect(d.minute).toBe(today.getMinutes())
})

test('D.min', () => {
expect(d.min).toBe(today.getMinutes())
})

test('D.second', () => {
expect(d.second).toBe(today.getSeconds())
})

test('D.sec', () => {
expect(d.sec).toBe(today.getSeconds())
})

test('D.format', () => {
    expect(bDay.format()).toBe("20, November, 1995")
})