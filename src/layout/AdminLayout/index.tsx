import Header from '@/components/AdminLayout/Header';
import Sidebar from '@/components/AdminLayout/Sidebar';
import { LayoutProps } from '@/interfaces/inretfaces';
import React from 'react';
import { useState } from 'react';

const AdminLayout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="w-full h-full font-iran-sans">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="md:pr-64 flex flex-col">
        <Header sidebarOpen={(value: boolean) => setSidebarOpen(value)} />

        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                {'داشبورد مدیریت'}
              </h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="py-2 h-96">
                <div className="border-4 border-dashed min-h-full border-gray-200 rounded-lg flex items-start justify-start">
                  {children}
                </div>
              </div>
              {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
      {/* <section className="w-full flex flex-col gap-3">
        <Header />
        <main className="p-2">{children}</main>
      </section> */}
    </div>
  );
};

export default AdminLayout;
