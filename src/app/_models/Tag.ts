export class Tag {

static readonly ANGULAR = new Tag('Angular', 'red');

static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred');
static readonly CSS = new Tag('CSS', 'skyblue');
static readonly HTML = new Tag('HTML', 'darkorange');
static readonly PYTHON = new Tag('Python', 'pink');
static readonly CSHARP = new Tag('C#', 'green');
static readonly CPLUSPLUS = new Tag('C++', 'Darkblue');
static readonly SECSGEM = new Tag('SECS/GEM', 'Black');
static readonly WINDFORM = new Tag('WinForm', 'Purple');
static readonly JAVA = new Tag('Java', 'orange');
static readonly NODEJS = new Tag('Node.JS', 'brown');
static readonly ASPNET = new Tag('ASP.NET', 'purple');
static readonly JAVASCRIPT = new Tag('JavaScript', 'orange');
static readonly REACT = new Tag('React', 'blue');
static readonly DART = new Tag('Dart', 'orange');
static readonly POWERBI = new Tag('Microsoft Power BI', 'yellowgreen');
static readonly UNITTY3D = new Tag('Unity3D', 'Black');
static readonly XAMARINFORM = new Tag('XamarinForm', 'Ocean');

private constructor(private readonly key: string, public readonly color: string) {

    }

    toString() 
    {
        return this.key;
    }
}