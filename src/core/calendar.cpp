#include <node.h>

int _caculateWeekDay(int y, int m, int d)
{
    // Won't be illegal
    if (m == 1 || m == 2)
    {
        m += 12;
        y--;
    }
    int Week = (d + 2 * m + 3 * (m + 1) / 5 + y + y / 4 - y / 100 + y / 400) % 7;
    return Week + 1;
}

int _caculateDay(int y, int m, int d)
{
    if (m == 2)
    {
        if ((y % 4 == 0 && y % 100 != 0) || (y % 400 == 0))
            return 29;
        else
            return 28;
    }
    else if (month == 4 || month == 6 || month == 9 || month == 11)
        return 30;
    else
        return 31;
}

void caculateWeekDay(const FunctionCallbackInfo<Value> &args)
{
    Isolate *isolate = args.GetIsolate();
    if (!args[0]->IsNumber())
    {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "args[0] must be a number")));
        return;
    }
    if (!args[1]->IsNumber())
    {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "args[1] must be a number")));
        return;
    }
    if (!args[2]->IsNumber())
    {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "args[1] must be a number")));
        return;
    }
    args.GetReturnValue().Set(_caculateWeekDay(args[0]->NumberValue(),args[1]->NumberValue(),args[2]->NumberValue());
}

void caculateDay(const FunctionCallbackInfo<Value> &args)
{
    Isolate *isolate = args.GetIsolate();
    if (!args[0]->IsNumber())
    {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "args[0] must be a number")));
        return;
    }
    if (!args[1]->IsNumber())
    {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "args[1] must be a number")));
        return;
    }
    if (!args[2]->IsNumber())
    {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "args[1] must be a number")));
        return;
    }
    args.GetReturnValue().Set(_caculateDay(args[0]->NumberValue(),args[1]->NumberValue(),args[2]->NumberValue());
}

void init(Localexports)
{
    NODE_SET_METHOD(exports, "hello", Method);
}

NODE_MODULE(addon, init);
