
import { AddButton, CheckBox, DateBicker, Input, SelectBox ,BaseButton } from "../components/form/index"
import { Frame, GridList } from "../components/ui/index";
import plusSign from "../assets/icons/form/plus-sign-circle.png"

const AddTransaction = () => {
  return (
    <div className="flex flex-col min-h-screen w-full ">
      <div className="flex flex-col py-6  flex-grow w-full">
        {/********************************* */}
        {/* البيانات الأساسية (Basic Information) */}
        <Frame heading="البيانات الاساسيه">
          <div className="flex flex-col gap-6">
            <GridList>
              <Input label="كود الجهه" defaultValue="031326548616" />
            </GridList>

            {/* Row 1 - Labels */}
            <GridList className="my-8">
              <CheckBox label="مرتبطه بالمعامله" />
              <CheckBox label="مرتبطة بقرار إداري" />
              <CheckBox label="تعميم" />
            </GridList>

            {/* Row 2 - Date and Type */}
            <GridList>
              <DateBicker required={true} />
              <Input
                label="الرد خلال (بالساعة)"
                type="number"
                defaultValue={0}
              />
              <SelectBox label="نوع المعامله" required={true} />
              <SelectBox label="تصنيف المعامله" required={true} />
            </GridList>

            <GridList>
              <SelectBox label="صوره الي" required={true} />
              <SelectBox label="القسم /الاداره" required={true} />
              <SelectBox label="الاهميه" required={true} />
            </GridList>

            <GridList>
              <Input label="موضوع المعامله" type="text"  className="md:col-span-2" />
              <Input label="الملاحظات" type="text"  className="md:col-span-2" />
            </GridList>
          </div>
        </Frame>

        {/* بيانات الأشخاص (Persons Information) */}
        <Frame heading="بيانات الاشخاص">
          <GridList>
            <Input label="الاسم" placeholder="الاسم" />
            <Input label="رقم الهويه" placeholder="2000000000" />
            <Input label="رقم الجوال" placeholder="05000000000" type="text" />
            <div className="flex items-end justify-start h-full md:col-span-1">
              <AddButton icon={plusSign} text="اضافه" />
            </div>
          </GridList>
        </Frame>

        {/* المرفقات (Attachments) */}
        <Frame heading="المرفقات">
          <GridList>
            <Input type="text" label="عدد المرفقات" defaultValue={0} />
            <SelectBox label="نوع المرفقات" required={true} />
            <Input
              type="text"
              label="وصف المرفقات"
              defaultValue={0}
              className="md:col-span-2"
            />
          </GridList>
        </Frame>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <BaseButton type="create" text="انشاء" />
          <BaseButton type="cancel" text="الغاء" />
        </div>
      </div>
    </div>
  );
};

export default AddTransaction;
