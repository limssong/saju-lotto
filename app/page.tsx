'use client'

import { useState } from 'react'
import SajuCalculator from '../components/SajuCalculator'
import SajuDisplay from '../components/SajuDisplay'
import LottoRecommendation from '../components/LottoRecommendation'

interface BirthInfo {
  gender: 'male' | 'female'
  year: number
  month: number
  day: number
  hour: number
  minute: number
}

export default function Home() {
  const [birthInfo, setBirthInfo] = useState<BirthInfo | null>(null)
  const [activeTab, setActiveTab] = useState<'saju' | 'lotto'>('saju')
  const [activeSajuTab, setActiveSajuTab] = useState<'total' | 'health' | 'wealth' | 'love' | 'study' | 'work'>('total')

  const handleBirthInfoSubmit = (info: BirthInfo) => {
    setBirthInfo(info)
  }

  return (
    <div className="container">
      <h1 className="title">사주로또</h1>
      
      <SajuCalculator onSubmit={handleBirthInfoSubmit} />
      
      {birthInfo && (
        <>
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'saju' ? 'active' : ''}`}
              onClick={() => setActiveTab('saju')}
            >
              사주보기
            </button>
            <button 
              className={`tab ${activeTab === 'lotto' ? 'active' : ''}`}
              onClick={() => setActiveTab('lotto')}
            >
              로또번호 추천
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'saju' && (
              <SajuDisplay 
                birthInfo={birthInfo} 
                activeTab={activeSajuTab}
                onTabChange={setActiveSajuTab}
              />
            )}
            
            {activeTab === 'lotto' && (
              <LottoRecommendation birthInfo={birthInfo} />
            )}
          </div>
        </>
      )}
    </div>
  )
}
