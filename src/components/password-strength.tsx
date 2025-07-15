import { useMemo } from 'react'
import { Check, X } from 'lucide-react'

interface PasswordStrengthProps {
  password: string
}

interface PasswordRequirement {
  label: string
  test: (password: string) => boolean
}

const requirements: PasswordRequirement[] = [
  {
    label: 'At least 8 characters',
    test: (password) => password.length >= 8
  },
  {
    label: 'Contains uppercase letter',
    test: (password) => /[A-Z]/.test(password)
  },
  {
    label: 'Contains lowercase letter',
    test: (password) => /[a-z]/.test(password)
  },
  {
    label: 'Contains number',
    test: (password) => /\d/.test(password)
  }
]

export function PasswordStrength({ password }: PasswordStrengthProps) {
  const strength = useMemo(() => {
    if (!password) return { score: 0, requirements: [] }
    
    const passedRequirements = requirements.map(req => ({
      ...req,
      passed: req.test(password)
    }))
    
    const score = passedRequirements.filter(req => req.passed).length
    
    return { score, requirements: passedRequirements }
  }, [password])

  if (!password) return null

  const getStrengthColor = (score: number) => {
    if (score <= 1) return 'text-red-600'
    if (score <= 2) return 'text-orange-600'
    if (score <= 3) return 'text-yellow-600'
    return 'text-green-600'
  }

  const getStrengthText = (score: number) => {
    if (score <= 1) return 'Weak'
    if (score <= 2) return 'Fair'
    if (score <= 3) return 'Good'
    return 'Strong'
  }

  return (
    <div className="mt-2 space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Password strength:</span>
        <span className={`text-sm font-medium ${getStrengthColor(strength.score)}`}>
          {getStrengthText(strength.score)}
        </span>
      </div>
      
      <div className="grid grid-cols-4 gap-1">
        {[1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className={`h-1 rounded-full ${
              level <= strength.score
                ? strength.score <= 1
                  ? 'bg-red-500'
                  : strength.score <= 2
                  ? 'bg-orange-500'
                  : strength.score <= 3
                  ? 'bg-yellow-500'
                  : 'bg-green-500'
                : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
      
      <div className="space-y-1">
        {strength.requirements.map((req, index) => (
          <div key={index} className="flex items-center space-x-2 text-xs">
            {req.passed ? (
              <Check className="h-3 w-3 text-green-600" />
            ) : (
              <X className="h-3 w-3 text-red-600" />
            )}
            <span className={req.passed ? 'text-green-600' : 'text-red-600'}>
              {req.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
