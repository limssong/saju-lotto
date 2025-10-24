'use client'

import { generateLottoNumbers } from '@/utils/lottoGenerator'

interface BirthInfo {
  gender: 'male' | 'female'
  year: number
  month: number
  day: number
  hour: number
  minute: number
}

interface LottoRecommendationProps {
  birthInfo: BirthInfo
}

export default function LottoRecommendation({ birthInfo }: LottoRecommendationProps) {
  const lottoSets = generateLottoNumbers(birthInfo)

  const getNumberColor = (index: number) => {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange']
    return colors[index % colors.length]
  }

  return (
    <div className="lotto-container">
      {lottoSets.map((set, index) => (
        <div key={index} className="lotto-set">
          <div className="set-title">{index + 1}번째 추천</div>
          <div className="lotto-numbers">
            {set.map((number, numIndex) => (
              <div
                key={numIndex}
                className={`lotto-number ${getNumberColor(numIndex)}`}
              >
                {number}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
