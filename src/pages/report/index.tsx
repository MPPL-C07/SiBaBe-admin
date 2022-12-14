import { LineChart } from '@delosaqua/scylla/charts';
import { Modal } from '@mantine/core';
import type { ChartOptions } from 'chart.js';
import * as React from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/redux';

import AddProduction from '@/components/AddProduction';
import Button from '@/components/buttons/Button';
import withAuth from '@/components/hoc/withAuth';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Separator from '@/components/Separator';

import { getMonthlyReport } from '@/redux/actions/Report';
import thousandSeparator from '@/util/thousandSeparator';

export default withAuth(ReportPage, 'all');
function ReportPage() {
  const { report } = useAppSelector(({ report }) => report);
  const dispatch = useAppDispatch();
  const [openAddProduction, setOpenAddProduction] = React.useState(false);

  const data = React.useMemo(
    () => ({
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'Mei',
        'Jun',
        'Jul',
        'Agust',
        'Sept',
        'Okto',
        'Nov',
        'Des',
      ],
      datasets: [
        {
          data:
            report?.map((item) => {
              if (!item.report) {
                return 0;
              }
              return item.report
                ?.map((item) => item.income - item.expense)
                .reduce((a, b) => a + b, 0);
            }) || [],
          backgroundColor: '#D6AD60',
          borderColor: '#D6AD60',
        },
      ],
    }),
    [report]
  );

  const options: ChartOptions<'line'> = {
    plugins: {
      tooltip: {
        formatLabel: (label) => `Bulan ${label}`,
        formatValue: (value) => `Rp ${thousandSeparator(value)}`,
      },
    },
  };

  React.useEffect(() => {
    dispatch(getMonthlyReport());
  }, []);

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <Modal
        opened={openAddProduction}
        onClose={() => setOpenAddProduction(false)}
        centered
        withCloseButton={false}
        padding={0}
        radius={50}
        size={982}
      >
        <AddProduction setOpened={setOpenAddProduction} />
      </Modal>
      <main>
        <div className='layout min-h-main mb-12 flex flex-col space-y-5'>
          <h2 className='text-center font-secondary'>Classification By</h2>
          <Separator width='30%' height={2} className='mx-auto' />
          <div className='mx-auto w-24'>
            <p className='mb-3 text-center font-secondary'>Month</p>
            <Separator width='100%' height={2} className='mx-auto' />
          </div>
          <div className='relative'>
            <LineChart id='report' hideBrush data={data} options={options} />
          </div>

          <div className='mt-9 flex items-center justify-end gap-7'>
            <div>
              <Button
                className='rounded-3xl py-6 px-14 font-secondary'
                variant='outline'
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenAddProduction(true);
                }}
              >
                Tambah Data Produksi
              </Button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
