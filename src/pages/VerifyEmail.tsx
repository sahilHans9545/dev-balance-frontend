import { useEffect, useState } from 'react';
import axios from '@/lib/axios';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useSearchParams } from 'react-router';
import FullScreenLayout from '@/components/layouts/FullScreen';

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [status, setStatus] = useState<'verifying' | 'success' | 'error'>('verifying');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await axios.get(`/auth/verify-email?token=${token}`);
        if (res.status === 200) {
          setStatus('success');
        } else {
          setStatus('error');
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setStatus('error');
      }
    };

    if (token) {
      verifyEmail();
    } else {
      setStatus('error');
    }
  }, [token]);

  return (
    <FullScreenLayout>
      <Card className="w-full max-w-md text-center gap-3">
        <CardHeader>
          <CardTitle>
            {status === 'verifying' && 'Verifying Email'}
            {status === 'success' && 'Email Verified!'}
            {status === 'error' && 'Verification Failed'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {status === 'verifying' && (
            <div className="flex items-center justify-center gap-2 text-gray-500">
              <Loader2 className="animate-spin hl-5 w-5" />
              Verifying your email...
            </div>
          )}
          {status === 'success' && (
            <div className="text-green-600">
              Your email has been verified successfully. You can now log in.
            </div>
          )}
          {status === 'error' && (
            <div className="text-red-500">Invalid or expired token. Please try again.</div>
          )}
          {status === 'success' && (
            <Button className="mt-4 w-full" onClick={() => (window.location.href = '/login')}>
              Go to Login
            </Button>
          )}
        </CardContent>
      </Card>
    </FullScreenLayout>
  );
};

export default VerifyEmail;
