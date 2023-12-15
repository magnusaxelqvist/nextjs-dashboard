import * as cron from 'node-cron';


export const task = cron.schedule('*/30 * * * *', () => {
  console.log('Scanning for SOS emails');
}, {
  scheduled: false,  // This prevents the task from starting automatically
});