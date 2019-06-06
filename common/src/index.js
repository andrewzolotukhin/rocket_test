import randomstring from 'randomstring';

export default function () {
    return "This is 10 char random string generated in imported library: " + randomstring.generate(10);
}