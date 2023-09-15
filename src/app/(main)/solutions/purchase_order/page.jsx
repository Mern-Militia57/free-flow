import Image from "next/image";
import React from "react";
import pur from "@/assets/purchase-order.png";
import pur1 from "@/assets/purchase-order1.png";
import img1 from "@/assets/pngwing.png";
import img2 from "@/assets/pngwing1.png";
const PurchaseOrderPage = () => {
  return (
    <div className="mx-auto container">
      <div className="bg-gradient-to-br   text-white py-32 p-6 from-[#363E51] to-[#363E51]">
        <h1 className="text-[40px] mb-5 font-bold">Purchase Order Solutions</h1>
        <h1 className="font-bold">
          Add purchase order (PO) numbers on all invoices generated on Flow and
          align with your internal accounting system.
        </h1>
      </div>
      <div className="my-14 items-center justify-between px-4  md:flex  flex-row-reverse gap-5 py-6">
        <Image
          className="w-[250px] sm:justify-center sm:my-6"
          width={350}
          src={pur}
          alt=""
        ></Image>
        <div>
          <h1 className="text-4xl font-bold">
            Issue Purchase Orders to Freelancers
          </h1>
          <p className="border w-16 my-3 border-blue-600"></p>
          <p className="font-medium text-xl tracking-wide">
            When you work with Freelancers on Flow, you can issue purchase{" "}
            <br /> orders and include the PO number for reference on the
            invoices <br /> generated on Flow. You can add a PO number to
  
            specific invoices <br /> or to all future invoices generated in a
            WorkRoom.
          </p>
        </div>
      </div>
      <div className=" mx-4 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="shadow-md shadow-[#b2b6b9] rounded border p-4">
          <Image className="w-16 h-16" width={350} src={img2} alt=""></Image>
          <h1 className="my-3 font-bold text-xl">
            Add PO Number to the WorkRoom
          </h1>
          <p>
            Once you add a PO number to a WorkRoom, all future invoices
            generated in that WorkRoom will automatically include the PO number
            specified.
          </p>
        </div>
        <div className="shadow-md shadow-[#b2b6b9] rounded border p-4">
          <Image className="w-16 h-16" width={350} src={img1} alt=""></Image>
          <h1 className="my-3 font-bold text-xl">
            Add PO Number to Specific Invoices
          </h1>
          <p>
            You can individually add a PO number to specific invoices, as per
            your requirement.
          </p>
        </div>
      </div>
      <div className="my-14 items-center justify-between px-4  md:flex  flex-row-reverse gap-5 py-6">
        <Image
          className="w-[250px] sm:justify-center sm:my-6"
          width={350}
          src={pur1}
          alt=""
        ></Image>
        <div>
          <h1 className="text-4xl font-bold">
            Issue Purchase Orders to Flow.com
          </h1>
          <p className="border w-16 my-3 border-blue-600"></p>
          <p className="font-medium text-xl tracking-wide">
            Issue Purchase Orders to Flow.com If you are working with a large{" "}
            <br /> number of Freelancers on Flow along with other members of
            your <br /> organization, you can simplify payments by receiving  a
            consolidated  <br />invoice. In case of a consolidated invoice, the PO may
            be  issued to  <br /> Flow.com. This feature is only available to Flow
            Enterprise users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PurchaseOrderPage;
