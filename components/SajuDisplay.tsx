'use client'

import { useState } from 'react'
import { calculateSaju } from '@/utils/sajuCalculator'

interface BirthInfo {
  gender: 'male' | 'female'
  year: number
  month: number
  day: number
  hour: number
  minute: number
}

interface SajuDisplayProps {
  birthInfo: BirthInfo
  activeTab: 'total' | 'health' | 'wealth' | 'love' | 'study' | 'work'
  onTabChange: (tab: 'total' | 'health' | 'wealth' | 'love' | 'study' | 'work') => void
}

export default function SajuDisplay({ birthInfo, activeTab, onTabChange }: SajuDisplayProps) {
  const sajuData = calculateSaju(birthInfo)

  const sajuTabs = [
    { id: 'total', label: '종합' },
    { id: 'health', label: '건강' },
    { id: 'wealth', label: '재물' },
    { id: 'love', label: '이성' },
    { id: 'study', label: '학업' },
    { id: 'work', label: '일' }
  ] as const

  const renderSajuContent = () => {
    switch (activeTab) {
      case 'total':
        return (
          <div className="saju-content">
            <h3>종합 운세</h3>
            <p><strong>생년월일:</strong> {birthInfo.year}년 {birthInfo.month}월 {birthInfo.day}일 {birthInfo.hour}시 {birthInfo.minute}분</p>
            <p><strong>성별:</strong> {birthInfo.gender === 'male' ? '남성' : '여성'}</p>
            <p><strong>사주:</strong> {sajuData.saju}</p>
            <p><strong>오행:</strong> {sajuData.ohang}</p>
            <p><strong>종합운세:</strong> {sajuData.total}</p>
          </div>
        )
      case 'health':
        return (
          <div className="saju-content">
            <h3>건강 운세</h3>
            <p>{sajuData.health}</p>
          </div>
        )
      case 'wealth':
        return (
          <div className="saju-content">
            <h3>재물 운세</h3>
            <p>{sajuData.wealth}</p>
          </div>
        )
      case 'love':
        return (
          <div className="saju-content">
            <h3>이성 운세</h3>
            <p>{sajuData.love}</p>
          </div>
        )
      case 'study':
        return (
          <div className="saju-content">
            <h3>학업 운세</h3>
            <p>{sajuData.study}</p>
          </div>
        )
      case 'work':
        return (
          <div className="saju-content">
            <h3>일/직업 운세</h3>
            <p>{sajuData.work}</p>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div>
      <div className="sub-tabs">
        {sajuTabs.map(tab => (
          <button
            key={tab.id}
            className={`sub-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {renderSajuContent()}
    </div>
  )
}
