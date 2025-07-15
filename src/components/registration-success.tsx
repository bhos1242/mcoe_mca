import { CheckCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface RegistrationSuccessProps {
  facultyName: string
  email: string
}

export function RegistrationSuccess({ facultyName, email }: RegistrationSuccessProps) {
  return (
    <Card className="mca-card max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-16 w-16 text-green-600" />
        </div>
        <CardTitle className="mca-heading-2 text-green-700">
          Registration Successful!
        </CardTitle>
        <CardDescription className="mca-text-base">
          Welcome to the MCA Faculty system, {facultyName}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="mca-text-base text-green-800">
            Your account has been created successfully with email: <strong>{email}</strong>
          </p>
        </div>
        <div className="space-y-2 text-left">
          <h4 className="font-semibold text-foreground">Next Steps:</h4>
          <ul className="mca-text-small text-muted-foreground space-y-1">
            <li>• Complete your faculty profile with additional information</li>
            <li>• Add your courses and research projects</li>
            <li>• Upload your profile picture</li>
            <li>• Review your public profile page</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
