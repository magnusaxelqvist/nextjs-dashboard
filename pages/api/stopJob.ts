import { NextApiRequest, NextApiResponse } from 'next';
import { task } from '@/app/jobs/mailScannerJob';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  task.stop();
  res.status(200).json({ message: 'Cron job stopped' });
}