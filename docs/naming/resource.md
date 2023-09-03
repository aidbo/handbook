# REST 资源命名指南

在REST中，主数据表示称为资源。拥有强大而一致的REST资源命名策略 - 肯定会证明您是长期最好的设计决策之一。

> REST中信息的关键抽象是一种资源。可以命名的任何信息都可以是资源：文档或图像，临时服务（例如“洛杉矶的今天天气”），其他资源的集合，非虚拟对象（例如人）等等。换句话说，任何可能是作者超文本引用目标的概念都必须符合资源的定义。资源是到一组实体的概念映射，而不是与任何特定时间点的映射相对应的实体。罗伊菲尔丁的论文

一个资源可以是一个单或集合。例如，`customers` 是集合资源，`customer`是单例资源（在银行业务域中）。我们可以使用 URI `/customers` 来识别集合资源。我们可以使用URI `/customers/{customerId}` 识别单个资源。

一个资源可能包含子集的资源。例如，在银行业务域中可以使用 `accounts` 特定 `customer` 的子集合资源 `/customers/{customerId}/accounts`。类似地，`account` 子集合资源内的单个资源 `accounts` 可以如下标识：`/customers/{customerId}/accounts/{accountId}`。

REST API 使用统一资源标识符（URI）来寻址资源。REST API设计者应该创建URI，将 REST API 的资源模型传达给潜在的客户端开发人员。当资源命名良好时，API直观且易于使用。如果做得不好，那么相同的API会感觉难以使用和理解。

_统一接口的约束部分通过 URI 和 HTTP 动词的组合来解决，并且根据标准和约定使用它们。_

以下是为新API创建资源URI时可以使用的一些提示。

## REST资源命名最佳实践
### 使用名词来表示资源
RESTful URI 应该引用作为事物（名词）的资源而不是引用动作（动词），因为名词具有动词不具有的属性 - 类似于具有属性的资源。资源的一些示例是：

- 系统的用户
- 用户帐户
- 网络设备等

他们的资源URI可以设计如下：

```
http://api.example.com/device-management/managed-devices
http://api.example.com/device-management/managed-devices/{device-id}
http://api.example.com/user-management/users/
http://api.example.com/user-management/users/{id}
```

为了更清楚，让我们将资源原型划分为四个类别（文档，集合，存储和控制器），然后您应始终将资源放入一个原型，然后始终如一地使用它的命名约定。为了一致的缘故，抵制设计资源的诱惑，这些资源是不止一个原型的混合体。

#### 1. document
文档资源是一种类似于对象实例或数据库记录的单一概念。在REST中，您可以将其视为资源集合中的单个资源。文档的状态表示通常包括具有值的字段和指向其他相关资源的链接。

使用“单数”名称表示文档资源原型。
```
http://api.example.com/device-management/managed-devices/{device-id}
http://api.example.com/user-management/users/{id}
http://api.example.com/user-management/users/admin
```

#### 2. collection
集合资源是服务器管理的资源目录。客户可以建议将新资源添加到集合中。但是，要由集合选择是否创建新资源。集合资源选择它想要包含的内容，并决定每个包含的资源的URI。

使用“复数”名称表示集合资源原型。
```
http://api.example.com/device-management/managed-devices
http://api.example.com/user-management/users
http://api.example.com/user-management/users/{id}/accounts
```

#### 3. store
商店是客户端管理的资源库。商店资源允许API客户端放入资源，将其退出，并决定何时删除它们。商店永远不会生成新的URI。相反，每个存储的资源都有一个客户端在最初放入存储时选择的URI。

使用“复数”名称表示商店资源原型。
```
http://api.example.com/cart-management/users/{id}/carts
http://api.example.com/song-management/users/{id}/playlists
```

#### 4. controller
控制器资源模拟程序概念。控制器资源就像可执行函数，带有参数和返回值; 输入和输出。

使用“动词”表示控制器原型。
```
http://api.example.com/cart-management/users/{id}/cart/checkout
http://api.example.com/song-management/users/{id}/playlist/play
```

### 一致性是关键
使用一致的资源命名约定和URI格式，以最小化和最大可读性和可维护性。您可以实现以下设计提示以实现一致性：

#### 1. 使用正斜杠（/）表示层次关系
正斜杠（/）字符用于URI的路径部分，以指示资源之间的层次关系。例如
```
http://api.example.com/device-management
http://api.example.com/device-management/managed-devices
http://api.example.com/device-management/managed-devices/{id}
http://api.example.com/device-management/managed-devices/{id}/scripts
http://api.example.com/device-management/managed-devices/{id}/scripts/{id}
```

#### 2. 不要在URI中使用尾部正斜杠（/）
作为URI路径中的最后一个字符，正斜杠（/）不会添加语义值，并可能导致混淆。最好完全放弃它们。
```
http://api.example.com/device-management/managed-devices/
http://api.example.com/device-management/managed-devices        // This is much better version
```

#### 3. 使用连字符（ - ）来提高URI的可读性
要使您的URI易于扫描和解释，请使用连字符（ - ）字符来提高长路径段中名称的可读性。
```
http://api.example.com/inventory-management/managed-entities/{id}/install-script-location //More readable
http://api.example.com/inventory-management/managedEntities/{id}/installScriptLocation //Less readable
```

#### 4. 不要使用下划线（_）
可以使用下划线代替连字符作为分隔符 - 但是根据应用程序的字体，下划线（_）字符可能会在某些浏览器或屏幕中被部分遮挡或完全隐藏。

为避免这种混淆，请使用连字符（ - ）而不是下划线（_）。
```
http://api.example.com/inventory-management/managed-entities/{id}/install-script-location //More readable
http://api.example.com/inventory_management/managed_entities/{id}/install_script_location //More error prone
```

#### 5. 在URI中使用小写字母
方便时，URI路径中应始终首选小写字母。

RFC 3986将URI定义为区分大小写，但方案和主机组件除外。例如
```
http://api.example.org/my-folder/my-doc //1
HTTP://API.EXAMPLE.ORG/my-folder/my-doc //2
http://api.example.org/My-Folder/my-doc //3
```
在上面的例子中，1和2是相同的，但3不是因为它使用大写字母的My-Folder。

#### 6. 不要使用文件扩展名
文件扩展名看起来很糟糕，不会增加任何优势。删除它们也会减少URI的长度。没理由保留它们。

除了上述原因，如果您想使用文件扩展突出显示API的媒体类型，那么您应该依赖于通过Content-Type标题传达的媒体类型来确定如何处理正文的内容。
```
http://api.example.com/device-management/managed-devices.xml /Do not use it/
http://api.example.com/device-management/managed-devices /This is correct URI/
```

### 切勿在URI中使用CRUD函数名称
URI不应用于指示执行CRUD功能。URI应该用于唯一标识资源，而不是对它们的任何操作。应使用HTTP请求方法来指示执行哪个CRUD功能。
```
HTTP GET http://api.example.com/device-management/managed-devices  //Get all devices
HTTP POST http://api.example.com/device-management/managed-devices  //Create new Device

HTTP GET http://api.example.com/device-management/managed-devices/{id}  //Get device for given Id
HTTP PUT http://api.example.com/device-management/managed-devices/{id}  //Update device for given Id
HTTP DELETE http://api.example.com/device-management/managed-devices/{id}  //Delete device for given Id
```

### 使用查询组件过滤URI集合
很多时候，您会遇到需要根据某些特定资源属性对需要排序，过滤或限制的资源集合的要求。为此，请不要创建新的API - 而是在资源集合API中启用排序，过滤和分页功能，并将输入参数作为查询参数传递。例如
```
http://api.example.com/device-management/managed-devices
http://api.example.com/device-management/managed-devices?region=USA
http://api.example.com/device-management/managed-devices?region=USA&brand=XYZ
http://api.example.com/device-management/managed-devices?region=USA&brand=XYZ&sort=installation-date
```

---

http://restful.p2hp.com/home/resource-naming
