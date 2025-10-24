'use client'

import { useState } from 'react'

interface BirthInfo {
  gender: 'male' | 'female'
  year: number
  month: number
  day: number
  hour: number
  minute: number
}

interface SajuCalculatorProps {
  onSubmit: (info: BirthInfo) => void
}

export default function SajuCalculator({ onSubmit }: SajuCalculatorProps) {
  const [formData, setFormData] = useState<BirthInfo>({
    gender: 'male',
    year: new Date().getFullYear() - 30,
    month: 1,
    day: 1,
    hour: 0,
    minute: 0
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const handleChange = (field: keyof BirthInfo, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i)
  const months = Array.from({ length: 12 }, (_, i) => i + 1)
  const days = Array.from({ length: 31 }, (_, i) => i + 1)
  const hours = Array.from({ length: 24 }, (_, i) => i)
  const minutes = Array.from({ length: 60 }, (_, i) => i)

  return (
    <form onSubmit={handleSubmit} className="form-group">
      <div className="form-row">
        <div className="form-item">
          <label htmlFor="gender">성별</label>
          <select
            id="gender"
            value={formData.gender}
            onChange={(e) => handleChange('gender', e.target.value as 'male' | 'female')}
          >
            <option value="male">남성</option>
            <option value="female">여성</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-item">
          <label htmlFor="year">년도</label>
          <select
            id="year"
            value={formData.year}
            onChange={(e) => handleChange('year', parseInt(e.target.value))}
          >
            {years.map(year => (
              <option key={year} value={year}>{year}년</option>
            ))}
          </select>
        </div>
        <div className="form-item">
          <label htmlFor="month">월</label>
          <select
            id="month"
            value={formData.month}
            onChange={(e) => handleChange('month', parseInt(e.target.value))}
          >
            {months.map(month => (
              <option key={month} value={month}>{month}월</option>
            ))}
          </select>
        </div>
        <div className="form-item">
          <label htmlFor="day">일</label>
          <select
            id="day"
            value={formData.day}
            onChange={(e) => handleChange('day', parseInt(e.target.value))}
          >
            {days.map(day => (
              <option key={day} value={day}>{day}일</option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-item">
          <label htmlFor="hour">시</label>
          <select
            id="hour"
            value={formData.hour}
            onChange={(e) => handleChange('hour', parseInt(e.target.value))}
          >
            {hours.map(hour => (
              <option key={hour} value={hour}>{hour}시</option>
            ))}
          </select>
        </div>
        <div className="form-item">
          <label htmlFor="minute">분</label>
          <select
            id="minute"
            value={formData.minute}
            onChange={(e) => handleChange('minute', parseInt(e.target.value))}
          >
            {minutes.map(minute => (
              <option key={minute} value={minute}>{minute}분</option>
            ))}
          </select>
        </div>
      </div>

      <button type="submit" className="btn">
        사주보기 및 로또번호 추천받기
      </button>
    </form>
  )
}
