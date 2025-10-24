interface BirthInfo {
  gender: 'male' | 'female'
  year: number
  month: number
  day: number
  hour: number
  minute: number
}

export function generateLottoNumbers(birthInfo: BirthInfo): number[][] {
  const { year, month, day, hour, minute, gender } = birthInfo
  const currentDate = new Date()
  
  // 사주팔자와 현재 날짜를 기반으로 한 시드 생성
  const seed = (year * 100000000 + month * 1000000 + day * 10000 + hour * 100 + minute) % 1000000
  const dateSeed = (currentDate.getFullYear() * 10000 + (currentDate.getMonth() + 1) * 100 + currentDate.getDate()) % 1000000
  const genderMultiplier = gender === 'male' ? 1 : 2
  
  const lottoSets: number[][] = []
  
  for (let set = 0; set < 5; set++) {
    const setSeed = (seed + dateSeed + set * 1000 + genderMultiplier * 100) % 1000000
    const numbers: number[] = []
    
    // 각 세트마다 다른 알고리즘으로 번호 생성
    for (let i = 0; i < 6; i++) {
      let number: number
      let attempts = 0
      
      do {
        // 사주 기반 번호 생성
        const sajuNumber = ((setSeed + i * 100 + attempts * 10) % 45) + 1
        
        // 날짜 기반 번호 생성
        const dateNumber = ((dateSeed + i * 50 + attempts * 5) % 45) + 1
        
        // 시간 기반 번호 생성
        const timeNumber = ((hour * 60 + minute + i * 7 + attempts * 3) % 45) + 1
        
        // 세트별 가중치 적용
        const weight = (set + 1) * 10
        const weightedNumber = ((sajuNumber + dateNumber + timeNumber + weight) % 45) + 1
        
        number = weightedNumber
        attempts++
      } while (numbers.includes(number) && attempts < 100)
      
      if (!numbers.includes(number)) {
        numbers.push(number)
      } else {
        // 중복 방지를 위한 대체 번호 생성
        for (let j = 1; j <= 45; j++) {
          if (!numbers.includes(j)) {
            numbers.push(j)
            break
          }
        }
      }
    }
    
    // 번호 정렬
    numbers.sort((a, b) => a - b)
    lottoSets.push(numbers)
  }
  
  return lottoSets
}
